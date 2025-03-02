### Roster Details<br />
Team Name: St4rboys<br />
Roster: Ang3l10wow, Bloody, hf, pavast4r, Sharpshooter<br />
Global Rank: [315](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [50]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  687.6<br />
<br />
Final Rank Value (687.6) = Starting Rank Value (680.5) + Head To Head Adjustments (7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.5
- 400 + ( ( 0.141 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 680.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1601 | 2024-12-13 | Big W           | L   | 0.689      | -            | -                | -                | -         |    -9.41 | Ang3l10wow, Bloody, hf, pavast4r, Sharpshooter    |
|            5 |     2980 | 2024-11-18 | Gods Reign      | W   | 0.523      | 1.000        | 0.024 (0.012)    | 0.573 (0.300)    | 0 (0.000) |    13.54 | Bloody, crony, hf, pavast4r, Sharpshooter         |
|            4 |     2982 | 2024-11-18 | Project Lethals | W   | 0.523      | 1.000        | 0.000 (0.000)    | 0.009 (0.004)    | 0 (0.000) |     2.81 | Bloody, crony, hf, pavast4r, Sharpshooter         |
|            3 |     4270 | 2024-10-26 | Gods Reign      | L   | 0.370      | -            | -                | -                | -         |    -1.79 | Ang3l10wow, Bloody, Empera, Scoffic, Sharpshooter |
|            2 |     6327 | 2024-09-21 | Gods Reign      | L   | 0.136      | -            | -                | -                | -         |    -0.61 | Ang3l10wow, Bloody, hf, Scoffic, Sharpshooter     |
|            1 |     6329 | 2024-09-21 | Victores Sumus  | W   | 0.136      | 1.000        | 0.007 (0.001)    | 0.169 (0.023)    | 0 (0.000) |     2.54 | Ang3l10wow, Bloody, hf, Scoffic, Sharpshooter     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($591.48)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-18 |      0.523 | $1,000.00      | $523.31         |
| 2024-09-21 |      0.136 | $500.00        | $68.17          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
