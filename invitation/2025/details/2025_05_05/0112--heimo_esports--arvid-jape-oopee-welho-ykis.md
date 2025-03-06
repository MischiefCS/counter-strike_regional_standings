### Roster Details<br />
Team Name: Heimo Esports<br />
Roster: arvid, japE, oopee, Welho, ykis<br />
Global Rank: [112](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [78]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  672.8<br />
<br />
Final Rank Value (672.8) = Starting Rank Value (688.7) + Head To Head Adjustments (-15.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.7
- 400 + ( ( 0.133 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 688.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      132 | 2025-02-21 | JANO Esports    | L   | 0.711      | -            | -                | -                | -         |    -5.48 | arvid, japE, oopee, Welho, ykis   |
|            6 |      729 | 2025-01-04 | BRUTE           | L   | 0.390      | -            | -                | -                | -         |    -6.58 | arvid, japE, oopee, spargo, Welho |
|            5 |      735 | 2024-12-29 | Insilio         | L   | 0.352      | -            | -                | -                | -         |    -7.71 | arvid, japE, oopee, spargo, Welho |
|            4 |      760 | 2024-12-23 | WOPA Esport     | L   | 0.309      | -            | -                | -                | -         |    -3.90 | arvid, japE, oopee, spargo, Welho |
|            3 |      773 | 2024-12-22 | ALASKA          | L   | 0.303      | -            | -                | -                | -         |    -1.77 | arvid, japE, oopee, spargo, Welho |
|            2 |      794 | 2024-12-20 | WOPA Esport     | W   | 0.290      | 0.333        | 0.024 (0.002)    | 0.346 (0.033)    | 0 (0.000) |     5.34 | arvid, japE, oopee, spargo, Welho |
|            1 |      819 | 2024-12-18 | Astralis Talent | W   | 0.276      | 0.333        | 0.001 (0.000)    | 0.218 (0.020)    | 0 (0.000) |     4.22 | arvid, japE, oopee, spargo, Welho |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($691.36)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.718 | $523.23        | $375.53         |
| 2024-12-24 |      0.316 | $1,000.00      | $315.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
