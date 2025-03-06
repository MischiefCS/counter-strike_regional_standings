### Roster Details<br />
Team Name: Victores Sumus<br />
Roster: arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster<br />
Global Rank: [70](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [9]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  808.6<br />
<br />
Final Rank Value (808.6) = Starting Rank Value (818.7) + Head To Head Adjustments (-10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.284[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 818.7
- 400 + ( ( 0.203 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 818.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |        3 | 2025-03-01 | Gods Reign       | L   | 0.949      | -            | -                | -                | -         |   -11.58 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            5 |        5 | 2025-02-28 | Flashback Gaming | W   | 0.948      | 0.143        | 0.005 (0.001)    | 0.096 (0.013)    | 1 (0.948) |    13.32 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            4 |        9 | 2025-02-28 | Big W            | W   | 0.943      | 0.143        | 0.005 (0.001)    | 0.065 (0.009)    | 1 (0.943) |     9.53 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            3 |       15 | 2025-02-27 | Gods Reign       | L   | 0.936      | -            | -                | -                | -         |   -11.88 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            2 |      886 | 2024-12-13 | Gods Reign       | L   | 0.435      | -            | -                | -                | -         |    -5.05 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |
|            1 |     1431 | 2024-11-16 | Flashback Gaming | L   | 0.250      | -            | -                | -                | -         |    -4.42 | arakyN, Benzene, ChAmP, RaYzeR, Recoilmaster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,630.79)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.949 | $1,717.92      | $1,630.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
