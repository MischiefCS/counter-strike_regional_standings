### Roster Details<br />
Team Name: Flashback Gaming<br />
Roster: clouda, Defaulter, EmbeR, Mcg1LLzZz, reV3nnnn<br />
Global Rank: [87](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  767.5<br />
<br />
Final Rank Value (767.5) = Starting Rank Value (773.9) + Head To Head Adjustments (-6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.216[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 773.9
- 400 + ( ( 0.181 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 773.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |        5 | 2025-02-28 | Victores Sumus | L   | 0.948      | -            | -                | -                | -         |   -13.32 | clouda, Defaulter, EmbeR, Mcg1LLzZz, reV3nnnn      |
|            4 |       11 | 2025-02-27 | Gods Reign     | L   | 0.942      | -            | -                | -                | -         |   -10.83 | clouda, Defaulter, EmbeR, Mcg1LLzZz, reV3nnnn      |
|            3 |       20 | 2025-02-26 | Big W          | W   | 0.935      | 0.143        | 0.005 (0.001)    | 0.065 (0.009)    | 1 (0.935) |    10.40 | clouda, Defaulter, EmbeR, Mcg1LLzZz, reV3nnnn      |
|            2 |     1416 | 2024-11-16 | Big W          | W   | 0.255      | 0.143        | 0.005 (0.000)    | 0.065 (0.002)    | 1 (0.255) |     2.96 | clouda, Defaulter, DiceDealer, Mcg1LLzZz, reV3nnnn |
|            1 |     1431 | 2024-11-16 | Victores Sumus | W   | 0.250      | 0.143        | 0.007 (0.000)    | 0.153 (0.005)    | 1 (0.250) |     4.42 | clouda, Defaulter, DiceDealer, Mcg1LLzZz, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,147.36)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.949 | $572.64        | $543.60         |
| 2024-11-16 |      0.255 | $2,367.49      | $603.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
