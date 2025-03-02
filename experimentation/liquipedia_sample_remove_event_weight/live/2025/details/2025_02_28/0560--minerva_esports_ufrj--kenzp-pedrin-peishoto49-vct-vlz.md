### Roster Details<br />
Team Name: Minerva Esports UFRJ<br />
Roster: kenzp, Pedrin, Peishoto49, VCT, vlz<br />
Global Rank: [560](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [128]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  432.0<br />
<br />
Final Rank Value (432.0) = Starting Rank Value (437.2) + Head To Head Adjustments (-5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.074[<sup>2</sup>](#table1)

The average of these factors is 0.019<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 437.2
- 400 + ( ( 0.019 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 437.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4716 | 2024-10-17 | UTFPR Pato Branco | L   | 0.305      | -            | -                | -                | -         |    -4.54 | kenzp, Pedrin, Peishoto49, VCT, vlz |
|            4 |     4761 | 2024-10-16 | UnB Green Owls    | L   | 0.300      | -            | -                | -                | -         |    -4.39 | kenzp, Pedrin, Peishoto49, VCT, vlz |
|            3 |     4817 | 2024-10-15 | UFG Eagles        | W   | 0.294      | 1.000        | 0.000 (0.000)    | 0.014 (0.004)    | 1 (0.294) |     4.39 | kenzp, Pedrin, Peishoto49, VCT, vlz |
|            2 |     4822 | 2024-10-15 | UNOESC Versatch   | W   | 0.293      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.293) |     4.14 | kenzp, Pedrin, Peishoto49, VCT, vlz |
|            1 |     4870 | 2024-10-14 | UFG Eagles        | L   | 0.288      | -            | -                | -                | -         |    -4.76 | kenzp, Pedrin, Peishoto49, VCT, vlz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
