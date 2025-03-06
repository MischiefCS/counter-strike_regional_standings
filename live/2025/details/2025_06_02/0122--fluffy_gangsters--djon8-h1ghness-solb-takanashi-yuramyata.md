### Roster Details<br />
Team Name: FLuffy Gangsters<br />
Roster: Djon8, h1ghnesS, SoLb, takanashi, yuramyata<br />
Global Rank: [122](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [76]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  479.6<br />
<br />
Final Rank Value (479.6) = Starting Rank Value (485.3) + Head To Head Adjustments (-5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.147[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.3
- 400 + ( ( 0.037 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 485.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      714 | 2025-01-08 | BadGuys             | L   | 0.232      | -            | -                | -                | -         |    -3.27 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata      |
|           11 |      720 | 2025-01-06 | Rhyno Esports       | L   | 0.218      | -            | -                | -                | -         |    -4.20 | Djon8, h1ghnesS, OverDrive, takanashi, yuramyata |
|           10 |      724 | 2025-01-05 | 9INE                | L   | 0.211      | -            | -                | -                | -         |    -1.01 | Djon8, h1ghnesS, OverDrive, takanashi, yuramyata |
|            9 |      731 | 2025-01-03 | Los kogutos         | W   | 0.198      | 0.417        | 0.000 (0.000)    | 0.038 (0.003)    | 0 (0.000) |     2.39 | Djon8, h1ghnesS, OverDrive, SoLb, yuramyata      |
|            8 |      742 | 2024-12-28 | Wu-Tang Clan        | W   | 0.158      | 0.417        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.91 | Djon8, h1ghnesS, OverDrive, SoLb, yuramyata      |
|            7 |      798 | 2024-12-19 | Dark Cloud Esports  | L   | 0.099      | -            | -                | -                | -         |    -0.86 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata      |
|            6 |      909 | 2024-12-12 | FAVBET Team         | L   | 0.052      | -            | -                | -                | -         |    -0.35 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata      |
|            5 |      925 | 2024-12-11 | Leo Team            | W   | 0.045      | 0.143        | 0.002 (0.000)    | 0.272 (0.002)    | 0 (0.000) |     0.86 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata      |
|            4 |      939 | 2024-12-10 | Insilio             | L   | 0.038      | -            | -                | -                | -         |    -0.74 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata      |
|            3 |      952 | 2024-12-09 | ECSTATIC            | L   | 0.030      | -            | -                | -                | -         |    -0.17 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata      |
|            2 |      968 | 2024-12-08 | Metizport           | L   | 0.022      | -            | -                | -                | -         |    -0.15 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata      |
|            1 |     1020 | 2024-12-06 | Team Spirit Academy | L   | 0.009      | -            | -                | -                | -         |    -0.05 | Djon8, h1ghnesS, SoLb, takanashi, yuramyata      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
